# Quantum Field Theory

Solutions to the end of chapter problems in the standard text 'Introduction to Quantum Field Theory' by Peskin & Schroeder. 
I will be adding to this as I work through the text.

## Problems

### Chapter 3
**3.1 Lorentz group.** Recall from Eq. (3.17) the Lorentz commutation relations
$$
  [ J^{\mu \nu}, J^{\rho \sigma}] = i(g^{\nu \rho} J^{\mu \sigma} - g^{\mu \rho} J^{\nu \sigma} - g^{\nu \sigma}J^{\mu \rho} + g^{\mu \sigma} J^{\nu \rho})
$$

**(a)** Define the generators of rotations and boosts as 
$$
  L^i = \frac{1}{2}\epsilon^{ijk}J^{jk}, \quad K^i = J^{0i}
$$

where $i, j, k = 1, 2, 3$. An infinitesimal Lorentz transformation can then be written

$$
  \Phi \rightarrow (1 - i \pmb{\theta}\cdot \pmb{L} - i \pmb{\beta} \cdot \pmb{K} ) \Phi
$$

Write the commutation relations of these vector operators explicitly. (For example, $[L^i, L^j] = i \epsilon^{ijk} L^k$). Show that the combinations

$$
  \pmb{J_+} = \frac{1}{2} (\pmb{L} + i \pmb{K}) \quad \text{and} \quad  \pmb{J_{-}} = \frac{1}{2} (\pmb{L} - i \pmb{K})
$$

commute with each other and seperately satisfy the commutation relations of angular momentum.


#### Solution

Computing the commutation relations explicitly for the vector operators. Using the cyclic properties of the levi-civita symbol
$$
\begin{aligned}
  [L^i, L^j] 
  &= \frac{1}{4}\epsilon^{iab} \epsilon^{jcd}[J^{ab}, J^{cd}]  \\

  &= \frac{i}{4}\epsilon^{iab} \epsilon^{jcd} (g^{bc} J^{ad} - g^{ac} J^{bd} - g^{bd}J^{ac} + g^{ad} J^{bc}) \\
  &= \frac{i}{4}\epsilon^{iab}  (\epsilon^{jcd}g^{bc} J^{ad} -\epsilon^{jcd} g^{ac} J^{bd} -\epsilon^{jcd} g^{bd}J^{ac} + \epsilon^{jcd} g^{ad} J^{bc}) \\
  & \text{swap } c \longleftrightarrow d \text{ in the third and last term}\\
  &= \frac{i}{4}\epsilon^{iab}  (\epsilon^{jcd}g^{bc} J^{ad} -\epsilon^{jcd} g^{ac} J^{bd} +\epsilon^{jdc} g^{bd}J^{ac} - \epsilon^{jdc} g^{ad} J^{bc}) \\
  & \text{relabel } c \longleftrightarrow d \text{ in the third and last term}\\
  &= \frac{i}{4}\epsilon^{iab}  (\epsilon^{jcd}g^{bc} J^{ad} -\epsilon^{jcd} g^{ac} J^{bd} +\epsilon^{jcd} g^{bc}J^{ad} -\epsilon^{jcd} g^{ac} J^{bd}) \\
  &=\frac{i}{2}(\epsilon^{iab}\epsilon^{jcd}g^{bc} J^{ad} -\epsilon^{iab}\epsilon^{jcd} g^{ac} J^{bd}) \\
  & \text{swap } a \longleftrightarrow b \text{ in the second term}\\
  &=\frac{i}{2}(\epsilon^{iab}\epsilon^{jcd}g^{bc} J^{ad} +\epsilon^{iba}\epsilon^{jcd} g^{ac} J^{bd}) \\
  & \text{relabel } a \longleftrightarrow b \text{ in the second term}\\
  &=\frac{i}{2}(\epsilon^{iab}\epsilon^{jcd}g^{bc} J^{ad} +\epsilon^{iab}\epsilon^{jcd} g^{bc} J^{ad}) \\
  &= i\epsilon^{iab}\epsilon^{jcd}g^{bc}J^{ad} \\ 
  &= -i\epsilon^{iab}\epsilon^{jcd}\delta^{bc}J^{ad} \\
  &= i\epsilon^{iab} \epsilon^{jdb} J^{ad} \\
  &= i( \delta^{ij} \delta^{ad} - \delta^{id} \delta^{ja} )J^{ad}  \\
  &= i(\delta^{ij}J^{dd} - J^{ji}) = i\epsilon^{ijk}L^k
\end{aligned}
$$

Where we used the representation of the Lorentz generators given in (3.18)
$$
  (J^{\mu \nu})_{\alpha \beta} = i(\delta^\mu_{\,\alpha} \delta^\nu_{\,\beta} - \delta^\nu_{\,\beta} \delta^\nu_{\,\alpha})
$$

and the identity 
$$
\begin{aligned}
  \epsilon^{ijk}L^k &= \frac{1}{2} \epsilon^{ijk} \epsilon^{klm}J^{lm} \\
  &= \frac{1}{2} ( \delta^{il}\delta^{jm} - \delta^{im}\delta^{jl})J^{lm} \\
  &= \frac{1}{2} ( J^{ij} - J^{ji}) \\
  & = \frac{1}{2}(J^{ij} + J^{ij}) = J^{ij}

\end{aligned}
$$

Proceeding with the boost generators
$$
\begin{aligned}
  [K^i, K^j] &= [J^{0i}, J^{0j}] \\
  &= i(g^{i0} J^{0j} - g^{00} J^{ij} - g^{ij}J^{00} + g^{0j} J^{i0}) \\
  &= i(0 - J^{ij} - 0 + 0) = -iJ^{ij}\\
  &= -i \epsilon^{ijk}L^k
\end{aligned}
$$

We'll need one more result for the next two calculations
$$
\begin{aligned}
  [L^i, K^j] &= \frac{1}{2} \epsilon^{ilm} [J^{lm}, J^{0j}] \\
  &= \frac{i}{2} \epsilon^{ilm} (g^{l0} J^{mj} - g^{lj} J^{m0} - g^{m0}J^{lj} + g^{mj} J^{l0}) \\
  &= \frac{i}{2} \epsilon^{ilm} (\delta^{lj}J^{m0} - \delta^{mj}J^{l0}) \\
  &= \frac{i}{2}( \epsilon^{ijm}J^{m0} - \epsilon^{ilj}J^{l0}) \\
  &= i\epsilon^{ijm}J^{m0} = i \epsilon^{ijk} K^k

\end{aligned}
$$

Now we can calculate the commutation relations for $\pmb{J_+}$ and $\pmb{J_-}$
$$
\begin{aligned}
  [J^i_+, J^j_-] &= \frac{1}{4} [ L^i + iK^i, L^j - iK^j] \\
  &= \frac{1}{4} ([L^i, L^j] - i[L^i,K^i] + i[K^i, L^j] + [K^i, K^j]) \\
  &= \frac{1}{4}(i \epsilon^{ijk}L^k + \epsilon^{ijk}K^k - \epsilon^{ijk}K^k - i\epsilon^{ijk}L^k)\\
  &= 0
\end{aligned}
$$

Finally we need to compute the commutation relations of $J_{\pm}^i$
$$
\begin{aligned}
  [J_\pm^i, J_\pm^j] &= \frac{1}{4}[L^i \pm iK^i, L^j \pm iK^j] \\
  &= \frac{1}{4} ([L^i, L^j] \pm i[L^i, K^j] \pm i[K^i, L^j] - [K^i, K^j] )\\
  &= \frac{1}{4}(i\epsilon^{ijk} L^k \pm i(i\epsilon^{ijk} K^k) \mp i(i\epsilon^{jik}K^k) + i\epsilon^{ijk}L^k)\\
  &= \frac{1}{2}(i\epsilon^{ijk} L^k \mp \epsilon^{ijk}K^k) \\
  &= -i\epsilon^{ijk}J^k_\pm
\end{aligned}
$$

We see that $J_+$  and $J_-$ independently satisfy the same commutation relations as $\pmb{L}$.


**(b)** The finite-dimensional representations of the rotation group correspond precisely to the allowed values for angular momentum: integers or half-integers. The result of part (a) implies that all finite-dimensional representations of the Lorentz group correspond to pairs of integers or half integers, $(j_+, j_-)$, corresponding to pairs of representations of the rotation group. Using the fact that $\pmb{J} = \pmb{\sigma} / 2$ in the spin-1/2 representation of angular momentum, write explicitly the transformation laws of the 2-component objects transforming according to the $(\frac{1}{2}, 0)$ and $(0, \frac{1}{2})$ representations of the Lorentz group. Show that these correspond precisely to the transformations of $\psi_L$ and $\psi_R$ given in (3.37). 

#### Solution

The transformation properties of the left and right handed spinors given by (3.37) are 
$$
  \psi_L \rightarrow (1 - i \pmb{\theta} \cdot \tfrac{\sigma}{2} - \pmb{\beta} \cdot \tfrac{\sigma}{2}) \psi_L \\
  \psi_R \rightarrow (1 - i \pmb{\theta} \cdot \tfrac{\sigma}{2} + \pmb{\beta} \cdot \tfrac{\sigma}{2}) \psi_R \\
$$

