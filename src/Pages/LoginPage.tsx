// src/pages/LoginPage.tsx
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const loginSchema = z.object({
 email: z.string().email("Invalid email address"),
 password: z.string()
   .min(8, "Password must be at least 8 characters")
   .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
   .regex(/[0-9]/, "Password must contain at least one number")
});

const registerSchema = z.object({
 email: z.string().email("Invalid email address"),
 password: z.string()
   .min(8, "Password must be at least 8 characters")
   .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
   .regex(/[0-9]/, "Password must contain at least one number"),
 confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
 message: "Passwords don't match",
 path: ["confirmPassword"]
});

type LoginFormData = z.infer<typeof loginSchema>;
type RegisterFormData = z.infer<typeof registerSchema>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface LoginPageProps {
 onLogin: () => void;
}

export const LoginPage = () => {
 const { login, register } = useAuth();
 const [isLogin, setIsLogin] = useState(true);
 const [serverError, setServerError] = useState<string | null>(null);
 const navigate = useNavigate();


 const loginForm = useForm<LoginFormData>({
   resolver: zodResolver(loginSchema),
   mode: "onBlur"
 });

 const registerForm = useForm<RegisterFormData>({
   resolver: zodResolver(registerSchema),
   mode: "onBlur"
 });

 const onSubmit = async (data: LoginFormData | RegisterFormData) => {
    try {
      setServerError(null);
      if (isLogin) {
        await login(data.email, data.password);
      } else {
        await register(data.email, data.password);
      }
      navigate('/');
    } catch (error) {
      setServerError(error instanceof Error ? error.message : "Something went wrong");
    }
  };

 const currentForm = isLogin ? loginForm : registerForm;
 const handleSubmit = isLogin ? loginForm.handleSubmit(onSubmit) : registerForm.handleSubmit(onSubmit);

 return (
   <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
     <Card className="w-full max-w-md">
       <CardHeader className="space-y-1">
         <CardTitle className="text-2xl">
           {isLogin ? 'Sign in' : 'Create an account'}
         </CardTitle>
         <CardDescription>
           {isLogin 
             ? 'Enter your email and password to sign in' 
             : 'Enter your details to create an account'}
         </CardDescription>
       </CardHeader>
       <CardContent>
         {serverError && (
           <Alert variant="destructive" className="mb-4">
             <AlertDescription>{serverError}</AlertDescription>
           </Alert>
         )}

         <form onSubmit={handleSubmit} className="space-y-4">
           <div className="space-y-2">
             <Label htmlFor="email">Email</Label>
             <Input 
               id="email"
               type="email"
               {...(isLogin ? loginForm.register('email') : registerForm.register('email'))}
               aria-invalid={!!currentForm.formState.errors.email}
             />
             {currentForm.formState.errors.email && (
               <p className="text-sm text-red-500">
                 {currentForm.formState.errors.email.message}
               </p>
             )}
           </div>

           <div className="space-y-2">
             <Label htmlFor="password">Password</Label>
             <Input 
               id="password"
               type="password"
               {...(isLogin ? loginForm.register('password') : registerForm.register('password'))}
               aria-invalid={!!currentForm.formState.errors.password}
             />
             {currentForm.formState.errors.password && (
               <p className="text-sm text-red-500">
                 {currentForm.formState.errors.password.message}
               </p>
             )}
           </div>

           {!isLogin && (
             <div className="space-y-2">
               <Label htmlFor="confirmPassword">Confirm Password</Label>
               <Input 
                 id="confirmPassword"
                 type="password"
                 {...registerForm.register('confirmPassword')}
                 aria-invalid={!!registerForm.formState.errors.confirmPassword}
               />
               {registerForm.formState.errors.confirmPassword && (
                 <p className="text-sm text-red-500">
                   {registerForm.formState.errors.confirmPassword.message}
                 </p>
               )}
             </div>
           )}

           <Button 
             type="submit" 
             className="w-full"
             disabled={currentForm.formState.isSubmitting}
           >
             {currentForm.formState.isSubmitting ? (
               "Loading..."
             ) : (
               isLogin ? "Sign in" : "Create account"
             )}
           </Button>
         </form>

         <div className="mt-4 text-center">
           <Button
             variant="link"
             onClick={() => setIsLogin(!isLogin)}
             type="button"
           >
             {isLogin 
               ? "Don't have an account? Sign up" 
               : "Already have an account? Sign in"}
           </Button>
         </div>
       </CardContent>
     </Card>
   </div>
 );
};